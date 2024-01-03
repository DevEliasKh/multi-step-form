export interface AppServiceAddOns {
  online_service: boolean;
  Large_storage: boolean;
  customizable_profile: boolean;
}

export interface AppService {
  plan: string;
  time: string;
  add_ons: AppServiceAddOns;
}

export interface AppContext {
  toggleState: string;
  handleClick: () => void;
  service: AppService;
  setService: React.Dispatch<React.SetStateAction<AppService>>;
}
