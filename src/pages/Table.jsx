import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../redux/reducers/surveyResultReducer";
import { FaRegTrashAlt } from "react-icons/fa";

function Table() {
  const data = useSelector((state) => state.survey.data);

  const dispatch = useDispatch();

  return (
    <>
      <div className='bg-[#f0ebf7] grid grid-cols-1 justify-center gap-5 my-8 px-[225px]'>
        <header className='bg-white p-8 rounded-lg border-t-4 border-[#743f9f] flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>Subbmission</h1>
          <p className='text-base'>
            Berikut ini adalah daftar yang telah mengisi form rokok
          </p>
        </header>

        <table className='bg-white text-center font-semibold rounded-lg border-collapse overflow-hidden'>
          <thead>
            <tr>
              <th rowspan='2' className='p-3 border font-medium'>
                No
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Nama
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Umur
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Jenis Kelamin
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Apakah Anda Perokok
              </th>
              <th colspan='4' className='p-3 border font-medium'>
                Brand Rokok
              </th>
              <th rowspan='2' className='p-3 border font-medium'>
                Action
              </th>
            </tr>

            <tr>
              <th className='p-3 border font-medium'>Gudang Garam Filter</th>
              <th className='p-3 border font-medium'>Lucky Strike</th>
              <th className='p-3 border font-medium'>Marlboro</th>
              <th className='p-3 border font-medium'>Esse</th>
            </tr>
          </thead>

          <tbody className='text-center font-semibold'>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='p-3 border'>{index + 1}</td>
                <td className='p-3 border'>{item.nama}</td>
                <td className='p-3 border'>{item.umur}</td>
                <td className='p-3 border'>{item.jenisKelamin}</td>
                <td className='p-3 border'>{item.perokok}</td>
                <td className='p-3 border'>{item.gudangGaram ? "v" : "-"}</td>
                <td className='p-3 border'>{item.luckyStrike ? "v" : "-"}</td>
                <td className='p-3 border'>{item.marlboro ? "v" : "-"}</td>
                <td className='p-3 border'>{item.esse ? "v" : "-"}</td>
                <td className='p-3 border'>
                  <FaRegTrashAlt
                    onClick={() => dispatch(removeData(item))}
                    className='cursor-pointer'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <span className='text-blue-600 underline'>
            <Link to='/'>kembali ke form</Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Table;
