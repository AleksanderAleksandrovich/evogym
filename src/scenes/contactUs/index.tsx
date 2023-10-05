import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'

type Props = {
  setSelectedPage: (val: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const styleInput = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white focus:border-2 focus:border-blue-400`
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm()

  async function hendlSubmit(e: FormEvent) {
    const valid = await trigger()
    if (!valid) {
      e.preventDefault()
    }
  }
  return (
    <section className="mx-auto w-5/6 pb-32 pt-24" id="contactus">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* form and image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={hendlSubmit}
              method="POST"
              action="https://formsubmit.co/aleksveles228@gmail.com"
            >
              <input
                type="text"
                className={styleInput}
                placeholder="Name"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'This fill required'}
                  {errors.name.type === 'maxLength' &&
                    'Max length 100 elements'}
                </p>
              )}
              <input
                type="email"
                className={styleInput}
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' && 'This fill required'}
                  {errors.email.type === 'pattern' && 'Invalid email'}
                </p>
              )}
              <textarea
                className={styleInput}
                rows={4}
                cols={20}
                placeholder="Message"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === 'required' && 'This fill required'}
                  {errors.message.type === 'maxLength' &&
                    'Max length 100 elements'}
                </p>
              )}
              <button
                type="submit"
                className="z-10 mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-secondary-400 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before w-full before:absolute before:-bottom-20 before:-right-14 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full z-10"
                src={ContactUsPageGraphic}
                alt="contactUsPageGraphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
