import { DataTypes, Model, BuildOptions } from "sequelize";
import { sequelize } from "../utils/database";

interface IUserModel extends Model {
  email: string;
  password: string;
  title: string;
  firstName: string;
  lastName: string;
  dob: Date;
  admin: boolean;
}

// Need to declare the static model so `findOne` etc. use correct types.
type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUserModel;
};

const User = <UserModelStatic>sequelize.define(
  "User",
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log("User: ", User === sequelize.models.User); // true

export default sequelize.models.User;
