function Biography(){

  return (
    <section className="Biography">
      <p className="Biography-paragraph">
      I'm a <b>full-stack developer</b> in <b>Los Angeles, California</b> with a passion for
      contributing to revolutionary ideas and building meaningful projects.
      After completing two degrees at UCLA and a full stack web development
      program, <b><i>I am currently seeking work as a software engineer.</i></b>
      </p>

      {/**<p className="Biography-paragraph">
      <b>Most recently,</b> I collaborated with peers to launch an <b>expanded
      version two of Numbers API</b>. Unmaintained for years with outdated,
      undocumented code, we rebuilt the <b>Express.js</b> backend into cleaner,
      more maintanable <b>Flask application</b>. Notably, my partner and I
      built a <b> web scraper</b> using <b>BeautifulSoup</b> to collect
      facts on hundreds of names and enter them in a database.
  </p>*/}

      <p className="Biography-paragraph">
      Throughout my time as a researcher in both chemistry and history,
      I constantly leveraged the power of code to discover, clean, and convey
      never-before-seen information that led to tangible impacts. Previously,
      I was an atmospheric chemist at <b>NASA Jet Propulsion Laboratory</b>,
      supporting the development of a <b>chemical reanalysis model </b>
       to be used by public health officials regarding air quality standards.
      Additionally, I had a project commissioned with the <b>Los Angeles Public
      Library's Special Collections</b> to build a digital database that improved
      accessibility and increased user traffick. Programming enabled me to
      engage in two vastly different sectors and effective to make change in
      both. Now, I'm a full time programmer.
      </p>
      <p className="Biography-paragraph Biography-closer">
      <b>Let's do something incredible together, <i>one line of code at a time.</i></b>
      </p>
    </section>
  )

}

export default Biography