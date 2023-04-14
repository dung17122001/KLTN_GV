import React from 'react';
import MenuItem from '../../components/ItemMenu';
import { FaHome, FaGraduationCap } from 'react-icons/fa';
import { SlScreenDesktop } from 'react-icons/sl';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import config from './../../configRoutes';
import { useNavigate } from 'react-router-dom';
function Menu() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-1/6 h-min bg-white">
                <div className={'menu'}>
                    <div
                        className={'flex flex-row items-center p-2'}
                        onClick={() => {
                            navigate(config.routeConfig.home);
                        }}
                    >
                        <div className="text-xl">
                            <FaHome color="gray" />
                        </div>
                        <div className="ml-2 text-gray-500">Trang chủ</div>
                    </div>
                </div>
                <MenuItem
                    menuItems={[
                        {
                            name: 'Thông tin chung   ',
                            subItems: [
                                { name: 'Thông tin giảng viên', to: 'thong-tin-giang-vien' },
                                { name: 'Thông tin học tập', to: 'login' },
                            ],
                        },
                    ]}
                    icon={<SlScreenDesktop />}
                ></MenuItem>
                <MenuItem
                    menuItems={[
                        {
                            name: 'Học tập',
                            subItems: [
                                { name: 'Kết quả học tập', to: '' },
                                { name: 'Lịch theo tuần', to: 'login' },
                            ],
                        },
                    ]}
                    icon={<FaGraduationCap />}
                ></MenuItem>
                <MenuItem
                    menuItems={[
                        {
                            name: 'Đăng ký học phần',
                            subItems: [
                                { name: 'Chương trình khung', to: '' },
                                { name: 'Đăng ký học phần', to: 'login' },
                            ],
                        },
                    ]}
                    icon={<BsFillCalendar2CheckFill />}
                ></MenuItem>
            </div>
        </>
    );
}

export default Menu;
