'use client'

import ImageSlider from '@/components/imagesContainer/slider';
import UserLoginForm from '@/components/ui/login_form/user_login_form';
  
export const dynamic = 'auto';

const LoginPage = () => {
  
  return (
    <div className="h-screen">
      <div className="h-full p-4 mb-10">
        <div className="flex flex-wrap items-center justify-center h-full py-10 lg:justify-around">
          
          <div className="shrink-[1] bg-cyan bg-slate-50 border overflow-clip border-slate-100 rounded-[5rem] grow-0 basis-auto md:mb-0 md:w-full md:shrink-0 relative lg:w-6/12">
            <ImageSlider/>
          </div>
          <div className="w-full mt-10 mb-12 md:w-8/12 md:mb-0 lg:w-5/12 xl:2-5/12">
           <UserLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
