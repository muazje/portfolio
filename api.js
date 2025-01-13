// api

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    
    // Handle the form submission (e.g., send an email, store in a database, etc.)
    // Here, you can use a service like Nodemailer or any third-party API.

    return res.status(200).json({ status: 'success', message: 'Message received' });
  } else {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }
}
