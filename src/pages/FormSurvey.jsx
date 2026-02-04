import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validation = yup.object({
  nama: yup.string().required("Nama Wjib di isi"),
  jenisKelamin: yup.string().required("Jenis Kelamin Wajib di isi"),
  perokok: yup.string().required("wajib di isi "),
  umur: yup
    .number()
    .typeError("Umur harus berupa angka")
    .required("Umur Wajib di isi"),
});

function FormSurvey() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validation),
  });

  // const navigate = useNavigate();

  function onSave(data) {
    console.log(data);
    let histories = JSON.parse(localStorage.getItem("history")) || [];
    histories.push(data);
    localStorage.setItem("history", JSON.stringify(histories));

    // navigate("/table");
  }
  return (
    <>
      <div className='bg-[#f0ebf7] grid grid-cols-1 justify-center gap-5 my-8 px-[225px]'>
        <header className='bg-white p-8 rounded-lg border-t-4 border-[#743f9f] flex flex-col gap-4'>
          <h1 className='text-4xl'>Form Survey Perokok</h1>
          <p className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus
            quo praesentium deserunt placeat tempore ad eum consequuntur. Itaque
            placeat distinctio aperiam vel maxime iusto voluptates facilis ab
            iste sunt!
          </p>
          <span className='text-red-500'>* required</span>
        </header>
        <form onSubmit={handleSubmit(onSave)} className='flex flex-col gap-5'>
          <section className='bg-white p-8 rounded-lg flex flex-col gap-4'>
            <Input
              id='nama'
              label='Siapa nama anda?'
              // required={true}
              placeholder='Nama'
              type='text'
              name='nama'
              register={register("nama")}
              error={formState.errors.nama?.message}
            />
          </section>
          <section className='bg-white p-8 rounded-lg flex flex-col gap-4'>
            <Input
              id='umur'
              label='Berapa umur anda?'
              placeholder='Umur'
              type='number'
              name='umur'
              register={register("umur")}
              error={formState.errors.umur?.message}
            />
          </section>

          <section className='bg-white p-8 rounded-lg  flex flex-col gap-6'>
            <label className='text-xl font-semibold'>
              Apa jenis kelamin anda? <span className='text-red-500'>*</span>
            </label>
            <div className='flex gap-5'>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='laki-laki'
                  name='jenis-kelamin'
                  value='laki-laki'
                  {...register("jenisKelamin", { required: true })}
                />
                Laki-laki
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='perempuan'
                  name='jenis-kelamin'
                  value='perempuan'
                  {...register("jenisKelamin", { required: true })}
                />
                Perempuan
              </label>
            </div>
            {formState.errors.jenisKelamin && (
              <span className='text-red-700'>
                {formState.errors.jenisKelamin.message}
              </span>
            )}
          </section>

          <section className='bg-white p-8 rounded-lg  flex flex-col gap-6'>
            <label className='text-xl font-semibold'>
              Apakah anda perokok? <span className='text-red-500'>*</span>
            </label>
            <div className='flex gap-5'>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='ya'
                  value='ya'
                  name='anda-perokok'
                  {...register("perokok", { required: true })}
                />
                Ya
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='tidak'
                  value='tidak'
                  name='anda-perokok'
                  {...register("perokok", { required: true })}
                />
                Tidak
              </label>
            </div>
            {formState.errors.perokok && (
              <span className='text-red-700'>
                {formState.errors.perokok.message}
              </span>
            )}
          </section>

          <section className='bg-white p-8 rounded-lg  flex flex-col gap-4'>
            <label className='text-xl font-semibold'>
              Jika Anda perokok, rokok apa yang anda pernah coba?
            </label>

            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='gudang-garam'
                id='gudang-garam'
                {...register("gudangGaram")}
              />
              Gudang Garam Filter
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='lucky-strike'
                id='lucky-strike'
                {...register("luckyStrike")}
              />
              Lucky Strike
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='marlboro'
                id='marlboro'
                {...register("marlboro")}
              />
              Marlboro
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='esse'
                id='esse'
                {...register("esse")}
              />
              Esse
            </label>
          </section>

          <div className='flex gap-5'>
            <button
              type='submit'
              className='bg-[#743f9f] text-white text-2xl px-4 py-1.5 rounded-md cursor-pointer'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormSurvey;
