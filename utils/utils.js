module.exports.makeNode = (type, begin, end, tags, children) => {
  return {
    type,
    begin,
    end,
    tags,
    children,
  }
};
