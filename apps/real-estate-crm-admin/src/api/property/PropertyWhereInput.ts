import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agent?: StringNullableFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
