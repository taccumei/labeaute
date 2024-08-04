export enum SelectedPage{
  Home = "home",
  About = "about",
  Appointment = "appointment",
  Policies = "policies",
  OurServices = "ourservices",
  AfterCare = "aftercare",
}


export interface BenefitType{
  icon: JSX.Element;
  title: string;
  // description: string;
}

export interface ImageSliderType{
  id: number,
  url: string,
  desc: string
}

export interface ServiceType{
  name: string, 
  description?: string,
  image: string
}