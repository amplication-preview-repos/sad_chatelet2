import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  agent?: string | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  location?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
