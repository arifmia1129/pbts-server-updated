const { Schema, model } = require("mongoose");

const meritoriousStudentSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    union: {
      type: String,
      required: true,
      trim: true,
    },
    village: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    lastExam: {
      type: String,
      enum: ["ssc", "hsc"],
      required: true,
    },
    lastExamDivision: {
      type: String,
      enum: ["science", "arts", "commerce"],
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    schoolOrCollegeName: {
      type: String,
      required: true,
    },
    chancedInstituteCategory: {
      type: String,
      required: true,
      enum: ["university", "engineering", "medical", "not"],
    },
    chancedInstituteName: {
      type: String,
      required: true,
    },
    chancedSubjectOrUnitName: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const MeritoriousStudent = model(
  "MeritoriousStudent",
  meritoriousStudentSchema
);

module.exports = MeritoriousStudent;
