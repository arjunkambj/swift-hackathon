// Token types
export interface Token {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
  mintAuthority?: string;
  freezeAuthority?: string;
  isCompressed?: boolean;
  created: Date;
}

// User-related types
export interface Wallet {
  address: string;
  label?: string;
}

// Application UI types
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
}

export interface SidebarNavItem extends NavItem {
  items?: NavItem[];
}

// Theme types
export type Theme = "dark" | "light" | "system";

// Dashboard types
export interface DashboardStats {
  tokensCreated: number;
  airdrops: number;
  distributionStats: DistributionStat[];
}

export interface DistributionStat {
  date: string;
  count: number;
}

// Form types
export interface TokenFormValues {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
  mintAuthority?: string;
  freezeAuthority?: string;
  isCompressed: boolean;
}

export interface AirdropFormValues {
  tokenId: string;
  recipients: string[];
  amounts: string[];
}
