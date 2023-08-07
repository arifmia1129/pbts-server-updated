const ScholarshipApplication = require('../models/ScholarshipApplication');
const generateScholarshipApplicationId = require('../utils/generateScholarshipApplicationId');

exports.createScholarshipApplicationService = async (application) => {
  const id = await generateScholarshipApplicationId();
  application.id = id;
  const res = await ScholarshipApplication.create(application);
  return res;
};

exports.getScholarshipApplicationService = async () => {
  return await ScholarshipApplication.find();
};

exports.getScholarshipApplicationByIdService = async (id) => {
  return await ScholarshipApplication.findOne({ id });
};

exports.updateScholarshipApplicationByIdService = async (id, info) => {
  return await ScholarshipApplication.updateOne({ id }, info, {
    runValidators: true,
  });
};
