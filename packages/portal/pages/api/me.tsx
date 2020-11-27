import authO from '../../utils/auth0';

export default async function me(req, res) {
  try {
    await authO.handleProfile(req, res, {});
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
