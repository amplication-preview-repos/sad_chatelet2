import { Property } from "../property/Property";

export type AgentAssignment = {
  agentName: string | null;
  assignmentDate: Date | null;
  createdAt: Date;
  id: string;
  property?: Property | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
