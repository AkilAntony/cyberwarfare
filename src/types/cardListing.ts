export interface CardProps {
  item: {
    name: string;
    owner_id: number;
    budget_name: string;
    spent: {
      value: number;
      currency: string;
    };
    available_to_spend: {
      value: number;
      currency: string;
    };
    card_type: string;
    expiry?: string;
    limit: number;
    status: string;
  };
}
