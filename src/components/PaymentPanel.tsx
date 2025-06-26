
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Tag, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PaymentPanelProps {
  selectedDate: string;
  selectedTime: string;
  players: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  onClose: () => void;
}

const PaymentPanel = ({ selectedDate, selectedTime, players, customerInfo, onClose }: PaymentPanelProps) => {
  const [selectedPlan, setSelectedPlan] = useState<'weekday' | 'weekend' | 'monthly'>('weekday');
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; amount: number; percentage?: number } | null>(null);
  const [isValidatingCode, setIsValidatingCode] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Determine if selected date is weekend
  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday = 0, Saturday = 6
      setSelectedPlan(isWeekend ? 'weekend' : 'weekday');
    }
  }, [selectedDate]);

  const plans = {
    weekday: { name: 'Green Fee - Dzień powszedni', price: 12000, description: '18 dołków + wózek' }, // 120 zł in cents
    weekend: { name: 'Green Fee - Weekend', price: 18000, description: '18 dołków + wózek + klubownia' }, // 180 zł in cents
    monthly: { name: 'Karnet miesięczny', price: 89900, description: 'Nieograniczony dostęp' } // 899 zł in cents
  };

  const calculateTotal = () => {
    const baseAmount = plans[selectedPlan].price * players;
    let discountAmount = 0;
    
    if (appliedDiscount) {
      if (appliedDiscount.percentage) {
        discountAmount = Math.round(baseAmount * appliedDiscount.percentage / 100);
      } else {
        discountAmount = appliedDiscount.amount;
      }
    }
    
    return {
      baseAmount,
      discountAmount,
      total: baseAmount - discountAmount
    };
  };

  const validateDiscountCode = async () => {
    if (!discountCode.trim()) return;
    
    setIsValidatingCode(true);
    try {
      const { data, error } = await supabase
        .from('discount_codes')
        .select('*')
        .eq('code', discountCode.toUpperCase())
        .eq('active', true)
        .single();

      if (error || !data) {
        toast({
          title: "Nieprawidłowy kod",
          description: "Kod zniżkowy nie istnieje lub wygasł",
          variant: "destructive",
        });
        return;
      }

      // Check if code is still valid
      const now = new Date();
      const validUntil = data.valid_until ? new Date(data.valid_until) : null;
      
      if (validUntil && validUntil < now) {
        toast({
          title: "Kod wygasł",
          description: "Ten kod zniżkowy już nie obowiązuje",
          variant: "destructive",
        });
        return;
      }

      if (data.max_uses && data.current_uses >= data.max_uses) {
        toast({
          title: "Kod wykorzystany",
          description: "Ten kod zniżkowy został już wykorzystany maksymalną liczbę razy",
          variant: "destructive",
        });
        return;
      }

      setAppliedDiscount({
        code: data.code,
        amount: data.discount_amount || 0,
        percentage: data.discount_percentage || undefined
      });

      toast({
        title: "Kod zastosowany!",
        description: `Zniżka ${data.discount_percentage ? data.discount_percentage + '%' : (data.discount_amount / 100).toFixed(2) + ' zł'} została dodana`,
      });
    } catch (error) {
      console.error('Error validating discount code:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się sprawdzić kodu zniżkowego",
        variant: "destructive",
      });
    } finally {
      setIsValidatingCode(false);
    }
  };

  const removeDiscount = () => {
    setAppliedDiscount(null);
    setDiscountCode('');
  };

  const processPayment = async () => {
    setIsProcessing(true);
    const { baseAmount, discountAmount, total } = calculateTotal();
    
    try {
      // First, create the reservation record
      const { data: reservation, error: reservationError } = await supabase
        .from('reservations')
        .insert({
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone,
          play_date: selectedDate,
          play_time: selectedTime,
          players_count: players,
          green_fee_type: selectedPlan,
          total_amount: total,
          discount_code: appliedDiscount?.code || null,
          discount_amount: discountAmount,
          status: 'pending'
        })
        .select()
        .single();

      if (reservationError) {
        throw reservationError;
      }

      // For now, we'll simulate a successful payment
      // In production, this would redirect to Stripe
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Update reservation status to paid
      await supabase
        .from('reservations')
        .update({ status: 'paid' })
        .eq('id', reservation.id);

      toast({
        title: "Płatność zakończona pomyślnie!",
        description: `Rezerwacja na ${selectedDate} o ${selectedTime} została opłacona`,
      });

      onClose();
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Błąd płatności",
        description: "Nie udało się przetworzyć płatności. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const { baseAmount, discountAmount, total } = calculateTotal();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-6 w-6" />
            Podsumowanie rezerwacji i płatność
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Reservation Summary */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Szczegóły rezerwacji</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>Data:</span>
              <span className="font-medium">{selectedDate}</span>
              <span>Godzina:</span>
              <span className="font-medium">{selectedTime}</span>
              <span>Liczba graczy:</span>
              <span className="font-medium">{players}</span>
              <span>Gracz:</span>
              <span className="font-medium">{customerInfo.name}</span>
              <span>Email:</span>
              <span className="font-medium">{customerInfo.email}</span>
              <span>Telefon:</span>
              <span className="font-medium">{customerInfo.phone}</span>
            </div>
          </div>

          {/* Plan Selection */}
          <div>
            <h3 className="font-semibold mb-3">Wybierz opcję gry</h3>
            <div className="grid gap-3">
              {Object.entries(plans).map(([key, plan]) => (
                <div
                  key={key}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPlan === key ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedPlan(key as any)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{plan.name}</h4>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{(plan.price / 100).toFixed(2)} zł</p>
                      <p className="text-sm text-gray-500">za osobę</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discount Code */}
          <div>
            <h3 className="font-semibold mb-3">Kod zniżkowy</h3>
            {!appliedDiscount ? (
              <div className="flex gap-2">
                <Input
                  placeholder="Wprowadź kod zniżkowy"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                  onKeyPress={(e) => e.key === 'Enter' && validateDiscountCode()}
                />
                <Button 
                  onClick={validateDiscountCode}
                  disabled={!discountCode.trim() || isValidatingCode}
                  variant="outline"
                >
                  {isValidatingCode ? "Sprawdzam..." : "Zastosuj"}
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-green-100 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Kod: {appliedDiscount.code}</span>
                  <Badge variant="secondary">
                    -{appliedDiscount.percentage ? `${appliedDiscount.percentage}%` : `${(appliedDiscount.amount / 100).toFixed(2)} zł`}
                  </Badge>
                </div>
                <Button onClick={removeDiscount} variant="ghost" size="sm">
                  Usuń
                </Button>
              </div>
            )}
          </div>

          <Separator />

          {/* Price Summary */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Cena bazowa ({players} {players === 1 ? 'gracz' : 'graczy'}):</span>
              <span>{(baseAmount / 100).toFixed(2)} zł</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Zniżka:</span>
                <span>-{(discountAmount / 100).toFixed(2)} zł</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Do zapłaty:</span>
              <span>{(total / 100).toFixed(2)} zł</span>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={processPayment}
              disabled={isProcessing}
              className="flex-1 bg-green-600 hover:bg-green-700"
              size="lg"
            >
              {isProcessing ? "Przetwarzanie..." : "Zapłać kartą"}
            </Button>
            <Button onClick={onClose} variant="outline" size="lg">
              Anuluj
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <AlertCircle className="h-4 w-4" />
              Bezpieczne płatności obsługiwane przez Stripe
            </div>
            <p>Twoje dane płatnicze są chronione najwyższymi standardami bezpieczeństwa</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPanel;
