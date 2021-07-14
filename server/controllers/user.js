import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../model/user.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      res.status(404).json({ message: "Password not found" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser.id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(201).json({ result: existingUser, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req, res) => {
  const { firstName, lastName, email, confirmPassword, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(500).json({ message: "User doesn't exist" });
    }

    if (password != confirmPassword) {
      res.status(500).json({ message: "Invalid Credentials." });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const result = User.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test");

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
