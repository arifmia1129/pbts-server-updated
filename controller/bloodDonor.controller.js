const {
  createBloodDonorService,
  getBloodDonorsService,
  getBloodDonorByIdService,
  updateBloodDonorByIdService,
  deleteBloodDonorByIdService,
} = require("../services/bloodDonor.service");

exports.createBloodDonor = async (req, res, next) => {
  try {
    const bloodDonorInfo = req.body;
    bloodDonorInfo.profileImage = req.file.destination + req.file.filename;
    const bloodDonor = await createBloodDonorService(bloodDonorInfo);
    res.status(201).json({ success: true, data: bloodDonor });
  } catch (error) {
    next(error);
  }
};

exports.getBloodDonors = async (req, res, next) => {
  try {
    const filter = {};
    const options = {
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      district: req.query.district,
      upazila: req.query.upazila,
      union: req.query.union,
    };
    const { bloodDonors, total } = await getBloodDonorsService(filter, options);
    res.status(200).json({ success: true, data: bloodDonors, total });
  } catch (error) {
    next(error);
  }
};

exports.getBloodDonorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bloodDonor = await getBloodDonorByIdService(id);
    if (!bloodDonor) {
      return res
        .status(404)
        .json({ success: false, message: "BloodDonor not found" });
    }
    res.status(200).json({ success: true, data: bloodDonor });
  } catch (error) {
    next(error);
  }
};

exports.updateBloodDonorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bloodDonor = await updateBloodDonorByIdService(id, req.body);
    if (!bloodDonor) {
      return res
        .status(404)
        .json({ success: false, message: "BloodDonor not found" });
    }
    res.status(200).json({ success: true, data: bloodDonor });
  } catch (error) {
    next(error);
  }
};

exports.deleteBloodDonorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bloodDonor = await deleteBloodDonorByIdService(id);
    if (!bloodDonor) {
      return res
        .status(404)
        .json({ success: false, message: "BloodDonor not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "BloodDonor deleted", data: bloodDonor });
  } catch (error) {
    next(error);
  }
};
