import Card from "@components/card";
import Balancer from "react-wrap-balancer";

export default function IntroWidget() {
  return (
    <Card className="flex h-full w-full flex-col items-center justify-center p-8 text-neutral-500 md:col-span-2 md:p-4">
      <Balancer>
        <p className="mb-2 text-lg">
          I&apos;m <span className="text-xl font-extrabold">Faisal Rahman</span>
          , a front-end developer with experience in React.js. I excel in
          creating user-friendly and dynamic web applications with clean code
          and attention to detail.
        </p>
        <p className="mb-2">
          I have worked on projects of various sizes and am familiar with
          related technologies such as Gatsby, Next.js, and Webpack.
        </p>
        <p className="mb-2">
          I am a quick learner, dedicated to delivering results, and excited to
          bring my passion for coding to new challenges.
        </p>
      </Balancer>
    </Card>
  );
}
