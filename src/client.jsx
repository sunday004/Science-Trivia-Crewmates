import { createClient } from '@supabase/supabase-js'

const URL = 'https://rbllfxggdyecmiobrrte.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJibGxmeGdnZHllY21pb2JycnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNDM3NzIsImV4cCI6MjAxNDYxOTc3Mn0.rmV6P4xZfmCkb7KnyMCqsGq5dRSx2pnit26cZ-JLycI'

export const supabase = createClient(URL, API_KEY);