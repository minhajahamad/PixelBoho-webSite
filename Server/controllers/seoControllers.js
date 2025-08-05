const SeoMeta = require('../db/models/seoSchema');
//get seo


module.exports.getAllSeo = async (req, res) => {
    try {
      const allSeo = await SeoMeta.find(); // fetch full documents
      res.json(allSeo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports.getSeoBySlug = async (req, res) => {
  try {
    const seo = await SeoMeta.findOne({ slug: req.params.slug });
    if (!seo) return res.status(404).json({ message: 'SEO data not found' });
    res.json(seo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//add SEO
module.exports.createSeo = async (req, res) => {
    try {
      const newSeo = new SeoMeta(req.body);
      await newSeo.save();
      res.status(201).json({ message: 'SEO data created successfully', data: newSeo });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


  
// UPDATE (PUT)
module.exports.updateSeo = async (req, res) => {
    try {
      const updatedSeo = await SeoMeta.findOneAndUpdate(
        { slug: req.params.slug },
        req.body,
        { new: true }
      );
      if (!updatedSeo) return res.status(404).json({ message: 'SEO data not found' });
      res.json({ message: 'SEO data updated successfully', data: updatedSeo });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  
  
// DELETE
module.exports.deleteSeo = async (req, res) => {
    try {
      const deletedSeo = await SeoMeta.findOneAndDelete({ slug: req.params.slug });
      if (!deletedSeo) return res.status(404).json({ message: 'SEO data not found' });
      res.json({ message: 'SEO data deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };