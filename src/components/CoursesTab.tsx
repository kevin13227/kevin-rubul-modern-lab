import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const CoursesTab = () => {
  const initiatives = [
    {
      title: "Immuno-Engineering (CLOSED)",
      description: (
        <>
          <br></br>
          description
        </>
      )
    },
    {
      title: "A Six-Week Course on Modern Medicine (CLOSED)",
      description: (
        <>
          <br></br>
          <strong>Course update:</strong> 210 registered participants (undergraduate and postgraduate students) joined this course from many countries across the world. Most participants were from India, but there were significant numbers from countries such as Bangladesh, Jordan, Egypt, Australia, Gambia. Among Indian students, most came from places like Aligarh Muslim University, IISER-Trivandrum, Delhi University, Gauhati University, Tezpur University, and many other known and unknown places. Some of the lectures are now available online at:{" "}
          <a 
            href="https://www.youtube.com/channel/UCFa70atKObm0UEptWgp_38g" 
            className="text-primary hover:underline font-medium"
          >
            https://www.youtube.com/channel/UCFa70atKObm0UEptWgp_38g
          </a>
          <br /><br />
          <strong>Lectures delivered by:</strong> Dr. Rubul Mout and Dr. Rajesh Gunage
          <br /><br />
          <strong>Dates/Time:</strong> 2/27/2022-3/3/2022
          <br /><br />
          <strong>Deadline for application:</strong> CLOSED.
          <br /><br />
          <strong>Who:</strong> College and university students with an interest in scientific career in Medicine.
          <br /><br />
          <strong>Objective:</strong> In the last two years, humanity has seen a great upheaval of health crisis, causing enormous economic loss to the world. But the good news is that we have had vaccines rolled out within a year after the first appearance of COVID-19, an incredible achievement of modern science and technology. Twenty years ago, it would have taken at least many years to develop such a vaccine. Thanks to all the science and technological development that happened in the last twenty years—from Next-generation sequencing to Cryo-electron microscopy to Protein engineering to RNA delivery. Breakthrough discoveries came from all reaches of scientists—Katalin Kariko, Drew Weissman, Sarah Gilbert, just to name a few.
          <br /><br />
          Yet participation in science by students is really low, especially from disadvantaged places and classes. This is primarily for most resources are centralized, and people who get good 'training' early on tend to get access to these resources. This course is an attempt to reach out to students from disadvantaged places to inform them about the science of modern medicine and encourage them to take a scientific career.
          <br /><br />
          College and university students from any discipline of sciences can apply for this course. To be considered for this course, they must send me an email with the following details: 1) applicant's name, affiliation, study level (college or university, which semester, etc), and study discipline; 2) a short paragraph on what is the applicant's dream and why he/she wants to participate in the course. Note, all these details are MUST—a mere email with 'please accept me into the course' is not enough and hence will not be considered. This is just to make sure that the applicants are serious about a science career. Please email your application to{" "}
          <a 
            href="mailto:rubulharvard@gmail.com" 
            className="text-primary hover:underline font-medium"
          >
            rubulharvard@gmail.com
          </a>
          {" "}before February 15th, 2022 (application is now closed).
          <br /><br />
          Learn more at at my Harvard webpage:{" "}
          <a 
            href="https://scholar.harvard.edu/rubulmout/teaching" 
            className="text-primary hover:underline font-medium"
          >
            https://scholar.harvard.edu/rubulmout/teaching
          </a>
          .
        </>
      )
    }
  ];


  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold text-foreground mb-4">Courses</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Courses designed for college and university students studying science
        </p>
      </div>

      {/* Main Initiatives */}
      <section>
        <div className="space-y-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-secondary/20">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{initiative.title}</CardTitle>
                    <CardDescription className="text-lg mt-1">{initiative.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};