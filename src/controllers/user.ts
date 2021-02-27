import User from "../models/user";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findOne({
    where: { id: req.params.id },
  }).catch((err: Error) => res.status(400).json({ error: err.message }));

  if (user === null) {
    const error = new Error("User does not exist");
    res.status(400).json({ error: error.message });
  }
  res.json(user);
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req?.body?.password, salt);

    const user = await User.create({ email: req.body.email, password: hash });

    res.json({ user: user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ errors: err });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findByPk(req.params.id);

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.title = req.body.title;
    user.dob = req.body.dob;
    user.save();
    res.json({ user: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

export const destroyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.json("User deleted.");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
