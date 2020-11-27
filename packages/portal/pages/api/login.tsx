import authO from '../../utils/auth0';

export default async function login(req, res) {
  try {
    await authO.handleLogin(req, res, {});
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
