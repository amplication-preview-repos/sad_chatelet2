import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  agent?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};