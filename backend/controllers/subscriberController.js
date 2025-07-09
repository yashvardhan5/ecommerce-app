
import Subscriber from '../models/subscriberModel.js';

export const subscribeUser = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'You are already subscribed.' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Thanks for subscribing!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
};
