import React from 'react'

const LeaveAReply = () => {
  return (
    <section className="mt-8">
    <h2 className="highlight-heading !text-left">Leave a Reply</h2>
    <form className="space-y-4 mt-4">
      <div className='mb-3'>
        <label
          required
          htmlFor="Comment"
          className="input-label"
        >
          Comment<span className='input-label-required ms-[1px]'>*</span>
        </label>
        <textarea
          id="Comment"
          // placeholder="Comment"
          className="w-full p-3  h-32 resize-none font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
        ></textarea>
        <div className='mb-3'>
          <label
            required
            htmlFor="name"
            className="input-label"
          >
            Name<span className='input-label-required ms-[1px]'>*</span>
          </label>
          <input
            required
            type="text"
            id="name"
            placeholder="Name"
            className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
          />
        </div>
        <div className='mb-3'>
          <label
            required
            htmlFor="email"
            className="input-label"
          >
            Email<span className='input-label-required ms-[1px]'>*</span>
          </label>
          <input
            required
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor="name"
            className="input-label"
          >
            Website
          </label>
          <input
            type="text"
            id="name"
            // placeholder="Name"
            className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="save-info" />
        <label htmlFor="save-info" className="font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary">
          Save my name, email, and website in this browser for the next
          time I comment.
        </label>
      </div>
      <button
        type="submit"
        className="site-button-primary !mt-6"
      >
        Post Comment
      </button>
    </form>
  </section>
  )
}

export default LeaveAReply