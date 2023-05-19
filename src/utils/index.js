const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  create_at,
  update_at,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  createAt: create_at,
  updateAt: update_at,
  username,
});

module.exports = { mapDBToModel };
