export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "brand",
      title: "Brand",
      type: "string"
    },
    {
      name: "model",
      title: "Model",
      type: "string"
    },
    {
      name: "color",
      title: "Color",
      type: "string"
    },
    {
      name: "desc",
      title: "Desc",
      type: "string"
    },
    {
      name: "features",
      title: "Features",
      type: "string"
    },
    {
      name: "discount",
      title: "Discount",
      type: "string"
    },
    {
      name: "saleTime",
      title: "SaleTime",
      type: "string"
    }
  ]
};
