export interface NPWarehouseResponse {
    SiteKey: string;
    Description: string;
    DescriptionRu: string;
    ShortAddress: string;
    ShortAddressRu: string;
    Phone: string;
    TypeOfWarehouse: string;
    Ref: string;
    Number: string;
    CityRef: string;
    CityDescription: string;
    CityDescriptionRu: string;
    SettlementRef: string;
    SettlementDescription: string;
    SettlementAreaDescription: string;
    SettlementRegionsDescription: string;
    SettlementTypeDescription: string;
    SettlementTypeDescriptionRu: string;
    Longitude: string;
    Latitude: string;
    PostFinance: string;
    BicycleParking: string;
    PaymentAccess: string;
    POSTerminal: string;
    InternationalShipping: string;
    SelfServiceWorkplacesCount: string;
    TotalMaxWeightAllowed: string;
    PlaceMaxWeightAllowed: string;
    SendingLimitationsOnDimensions: {
        Width: string;
        Height: string;
        Length: string;
    };
    ReceivingLimitationsOnDimensions: {
        Width: string;
        Height: string;
        Length: string;
    };
    Reception: {
        Monday: string;
        Tuesday: string;
        Wednesday: string;
        Thursday: string;
        Friday: string;
        Saturday: string;
        Sunday: string;
    };
    Delivery: {
        Monday: string;
        Tuesday: string;
        Wednesday: string;
        Thursday: string;
        Friday: string;
        Saturday: string;
        Sunday: string;
    };
    Schedule: {
        Monday: string;
        Tuesday: string;
        Wednesday: string;
        Thursday: string;
        Friday: string;
        Saturday: string;
        Sunday: string;
    };
    DistrictCode: string;
    WarehouseStatus: string;
    WarehouseStatusDate: string;
    CategoryOfWarehouse: string;
    RegionCity: string;
    WarehouseForAgent: string;
    MaxDeclaredCost: string;
    DenyToSelect: string;
    PostMachineType: string;
    PostalCodeUA: string;
    OnlyReceivingParcel: string;
    WarehouseIndex: string;
}