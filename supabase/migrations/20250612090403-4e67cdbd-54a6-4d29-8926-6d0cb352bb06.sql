
-- Create reservations table to store golf bookings
CREATE TABLE public.reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  play_date DATE NOT NULL,
  play_time TEXT NOT NULL,
  players_count INTEGER NOT NULL DEFAULT 1,
  green_fee_type TEXT NOT NULL, -- 'weekday', 'weekend', 'monthly'
  total_amount INTEGER NOT NULL, -- amount in cents (grosze)
  discount_code TEXT,
  discount_amount INTEGER DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'paid', 'cancelled'
  stripe_session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create discount codes table
CREATE TABLE public.discount_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  discount_percentage INTEGER, -- percentage discount (10 = 10%)
  discount_amount INTEGER, -- fixed amount discount in cents
  valid_from DATE,
  valid_until DATE,
  max_uses INTEGER,
  current_uses INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.discount_codes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert reservations (for guest bookings)
CREATE POLICY "allow_insert_reservations" ON public.reservations
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read their own reservations by email
CREATE POLICY "allow_select_own_reservations" ON public.reservations
  FOR SELECT
  USING (true);

-- Allow reading active discount codes
CREATE POLICY "allow_select_active_discount_codes" ON public.discount_codes
  FOR SELECT
  USING (active = true AND (valid_until IS NULL OR valid_until >= CURRENT_DATE));

-- Insert some sample discount codes
INSERT INTO public.discount_codes (code, discount_percentage, valid_until, max_uses) VALUES
  ('WITAMY10', 10, '2024-12-31', 100),
  ('GOLF20', 20, '2024-12-31', 50),
  ('WEEKEND15', 15, '2024-12-31', 200);
