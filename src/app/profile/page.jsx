"use client"
import { UpdateUserModal } from '@/component/UpdateUser';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';


const ProfilePage = () => {

    const userData = authClient.useSession()
      // console.log(userData)
      const user= userData.data?.user

    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5'>
                <Avatar size="lg">
                        <Avatar.Image alt="Shariar" src={user?.image} referrerPolicy="no-referrer"/>
                        <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                      </Avatar>

                      <h2 className='text-xl font-bold'>{user?.name}</h2>
                      <p className='text-muted'>{user?.email}</p>
                      <UpdateUserModal></UpdateUserModal>
            </Card>
        </div>
    );
};

export default ProfilePage;