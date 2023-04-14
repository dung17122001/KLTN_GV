import React, { useState } from 'react';
import classNames from 'classnames';
import style from './danhSachLopHP.scss';
import { useNavigate } from 'react-router-dom';
import config from '../../configRoutes';
import routes from '../../configRoutes/routes';
import Dialog from '@mui/material/Dialog';
import { FaRegWindowClose } from 'react-icons/fa';
import { Scrollbar } from 'react-scrollbars-custom';
function DanhSachLopHP() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const listDiem = [
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
        {
            TK1: '3.0',
            TK: '4.0',
            CK: '8.0',
        },
    ];

    const navigate = useNavigate();
    const cx = classNames.bind(style);
    const options = ['HK1 (2021-2022)', 'HK1 (2021-2022)', 'HK1 (2021-2022)'];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={'100%'}
                maxWidth={'100%'}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="w-full flex justify-between mt-5">
                    <div className="text-xl font-bold text-sv-blue-5 pl-2">Lịch học, lịch thi theo tuần</div>
                    <div>
                        <FaRegWindowClose className="mr-5" size={30} color="#47A9FF" onClick={handleClose} />
                    </div>
                </div>

                <div className="flex h-screen justify-center items-center p-10">
                    <Scrollbar className="w-full, h-full">
                        <table className={cx('table-dkhp')}>
                            <thead className="bg-gray-200  text-sv-blue-5 border">
                                <tr className="bg-gray-200 border border-sv-blue-5">
                                    <th rowSpan={3} className="border border-sv-blue-4">
                                        STT
                                    </th>
                                    <th rowSpan={3} className="   border border-sv-blue-4">
                                        Mã số sinh viên
                                    </th>
                                    <th rowSpan={3} className="w-64 border border-sv-blue-4">
                                        Họ tên sinh viên
                                    </th>

                                    <th colSpan={2} className="border border-sv-blue-4">
                                        Giữa kỳ
                                    </th>
                                    <th colSpan={9} className=" border border-sv-blue-4">
                                        Thường xuyên
                                    </th>
                                    <th colSpan={5} className=" border border-sv-blue-4">
                                        Thực hành
                                    </th>

                                    <th colSpan={1} rowSpan={3} className="w-20 border border-sv-blue-4">
                                        Cuối kỳ
                                    </th>
                                    <th colSpan={1} rowSpan={3} className=" w-20 border border-sv-blue-4">
                                        Điểm tổng kết
                                    </th>
                                    <th colSpan={1} rowSpan={3} className="w-20 border border-sv-blue-4">
                                        Thang điểm 4
                                    </th>
                                    <th colSpan={1} rowSpan={3} className="w-20 border border-sv-blue-4">
                                        Điểm chữ
                                    </th>
                                    <th colSpan={1} rowSpan={3} className="w-20 border border-sv-blue-4">
                                        Xếp loại
                                    </th>
                                </tr>
                                <tr>
                                    <th rowSpan={2} className=" border border-sv-blue-4">
                                        1
                                    </th>
                                    <th rowSpan={2} className="w-20 border border-sv-blue-4">
                                        Chuyên cần
                                    </th>
                                    <th rowSpan={1} colSpan={9} className=" border border-sv-blue-4">
                                        LT Hệ số 1
                                    </th>
                                    <th rowSpan={2} className=" border border-sv-blue-4">
                                        1
                                    </th>
                                    <th rowSpan={2} className=" border border-sv-blue-4">
                                        2
                                    </th>
                                    <th rowSpan={2} className=" border border-sv-blue-4">
                                        3
                                    </th>
                                    <th rowSpan={2} className=" border border-sv-blue-4">
                                        4
                                    </th>
                                    <th rowSpan={2} className=" border border-sv-blue-4">
                                        5
                                    </th>
                                </tr>
                                <tr>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        1
                                    </th>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        2
                                    </th>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        3
                                    </th>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        4
                                    </th>
                                    <th rowSpan={1} className="border border-sv-blue-4">
                                        5
                                    </th>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        6
                                    </th>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        7
                                    </th>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        8
                                    </th>
                                    <th rowSpan={1} className=" border border-sv-blue-4">
                                        9
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listDiem.map((item, index) => (
                                    <tr className="bg-white">
                                        <td className="text-center">1</td>
                                        <td className="text-center">420300068520</td>
                                        <td className="text-left border max-w-md ">Nguyễn Tuấn Thanh</td>

                                        <td
                                            className={`${item.TK1} > 5 ` ? 'text-red-500  text-center' : 'text-center'}
                                        >
                                            {item.TK1}
                                        </td>
                                        <td className="text-center"></td>
                                        <td className="text-center">7,0</td>
                                        <td className="text-center">7,5</td>
                                        <td className="text-center">7.0</td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>
                                        <td className="text-center"></td>

                                        <td className="text-center">9.0</td>
                                        <td className="text-center">7.0</td>
                                        <td className="text-center">3.2</td>
                                        <td className="text-center">A+</td>
                                        <td className="text-center">Khá</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Scrollbar>
                </div>
            </Dialog>
            <div className="h-full w-full bg-gray-100 flex flex-row">
                <div className="w-1/12"></div>
                <div className="w-10/12 bg-white mt-2 rounded p-5">
                    <div className="text-2xl text-sv-text-2 font-bold border-b-2 ml-2 h-10 flex flex-row justify-between items-center">
                        <p> Danh sách lớp học phần</p>
                        <div className="mr-16">
                            <div className="flex items-center border text-xl  border-sv-blue-4 rounded">
                                <select
                                    className="text-sv-text-2 border  border-sv-blue-4 "
                                    value={selectedOption}
                                    // onChange={handleChange}
                                >
                                    {options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table className={cx('table-dslhp')}>
                            <thead className="bg-blue-100">
                                <tr>
                                    <th rowSpan={2}>STT</th>
                                    <th rowSpan={2}>Mã học phần</th>
                                    <th rowSpan={2}>Tên lớp học phần</th>
                                    <th rowSpan={2}>Tên môn học/học phần</th>
                                    <th rowSpan={2}>Số tín chỉ</th>

                                    <th rowSpan={1} colSpan={2}>
                                        Thời gian
                                    </th>
                                </tr>
                                <tr>
                                    <th>Bắt đầu</th>
                                    <th>Kết thúc</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={handleClickOpen}>
                                    <td>1</td>
                                    <td>4203002790</td>
                                    <td>DHKTPM15A</td>
                                    <td>Lập trình hướng đối tượng</td>
                                    <td>3</td>
                                    <td>31/12/2022</td>
                                    <td>31/12/2022 </td>
                                </tr>

                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DanhSachLopHP;
