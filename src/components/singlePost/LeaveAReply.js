import React from 'react'

const LeaveAReply = () => {
  return (
    <section className="mt-8">
    <h2 className="font-suranna text-[36px] md:text-[50px] font-[400] leading-[1.4em] text-secondary">Leave a Reply</h2>
    <form className="space-y-4 mt-4">
      <div>
        <label
          required
          htmlFor="Comment"
          className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary"
        >
          Comment*
        </label>
        <textarea
          id="Comment"
          // placeholder="Comment"
          className="w-full p-3  h-32 resize-none font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
        ></textarea>
        <div>
          <label
            required
            htmlFor="name"
            className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary"
          >
            Name*
          </label>
          <input
            required
            type="text"
            id="name"
            placeholder="Name"
            className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
          />
        </div>
        <div>
          <label
            required
            htmlFor="email"
            className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary"
          >
            Email*
          </label>
          <input
            required
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.4em] text-primary"
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
        className="bg-q4ca25af p-2 flex items-center justify-center gap-2 font-jost text-[12px] md:text-[16px] font-[500] leading-[1.4em] text-text"
      >
        Post Comment
      </button>
    </form>
  </section>
  )
}

export default LeaveAReply