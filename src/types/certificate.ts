export interface Certificate {
  title: string;
  issuer: string;
  image: string;
  issued_at: string;
  expires_at?: string | null;
  verify?: string;
}
