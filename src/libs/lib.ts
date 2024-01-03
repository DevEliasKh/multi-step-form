type AppServicePlans = "arcade" | "advanced" | "pro";

export interface AppServiceAddOns {
  online_service: boolean;
  Large_storage: boolean;
  customizable_profile: boolean;
}

export interface AppService {
  plan: AppServicePlans;
  time: string;
  add_ons: AppServiceAddOns;
}

export interface AppContext {
  toggleState: string;
  handleClick: () => void;
  service: AppService;
  setService: React.Dispatch<React.SetStateAction<AppService>>;
}

export function Keys<T>(obj: T) {
  const keys: (keyof T)[] = [];
  let key: keyof T;
  for (key in obj) {
    keys.push(key);
  }
  return keys;
}
