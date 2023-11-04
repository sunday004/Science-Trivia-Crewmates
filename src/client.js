import { createClient } from '@supabase/supabase-js'

const URL = 'https://qwipbxxwlxydskfzryxj.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3aXBieHh3bHh5ZHNrZnpyeXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTY1OTAsImV4cCI6MjAxNDA5MjU5MH0.iDWvS7hGYgODDMNJwEHLqZMYDlRMzS1aHJjCrZiwstY'

export const supabase = createClient(URL, API_KEY);