import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  _id: number;
  @Column()
  userID: string;
  @Column()
  userPW: string;
  @Column()
  userName: string;
  @Column()
  userSex: string;
  @Column()
  userPhoneNumber: string;
  @Column()
  userAddress: string;
  @Column()
  userProfileImage: string;

  //TODO: need to add shopinfo entity type and join settings
  // @OneToOne()
  // @JoinColumn()
  // shopInfo
}
