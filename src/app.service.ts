import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createHash } from 'crypto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  //  creating a user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  //  reading the user collection
  async readUser() {
    return this.userModel
      .find({})
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }

  // find user ID
  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  // Get Avatar
  async getAvatar(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  // deleting Avatar
  async deleteAvatar(id: string): Promise<User> {
    return await this.userModel.updateOne(
      { _id: id },
      { $unset: { avatar: '' } },
    );
  }

  // upadting the data
  async updateUser(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  // deleting the data
  async deleteUser(id) {
    return this.userModel.findByIdAndRemove(id);
  }
}
