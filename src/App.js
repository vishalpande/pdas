import React from "react";
import ProfileCard from "./ProfileCard";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";
import "../node_modules/bulma/css/bulma.css";

export default function App() {
  return (
    <>
<section className="hero is-primary">
<div className="hero-body">
<p className="title" style={{textAlign: 'center'}}>Personal Digital Assistent.</p>
</div>



</section>
      <div className="container" style={{alignSelf: 'center'}}>
        <div className="columns">
          <div className="column is-3">
            <ProfileCard title="Alexa" handle="@Alexa99" image={Alexa} description="Amazon Alexa, also known simply as Alexa, is a virtual assistant technology largely based on a Polish speech synthesiser named Ivona, bought by Amazon in 2013. It was first used in the Amazon Echo smart speaker and the Echo Dot, Echo Studio and Amazon Tap speakers developed by Amazon Lab126." />
          </div>
          <div className="column is-3">
            <ProfileCard title="Cortana" handle="@cortana32" image={Cortana} description="Cortana is Microsoft’s personal productiv…
To get started, select the Cortana ic…
Here are some things Cortana can do for …
•Manage your calendar and keep yo…
•Join a meeting in Microsoft Teams or fi…
•Create and manage lists"/>
          </div>

          <div className="column is-3">
            <ProfileCard title="Siri" handle="@siri01" image={Siri} description="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, tvOS, and audioOS operating systems. It uses voice queries, gesture based control, focus-tracking and a natural-language user interface to answer questions, make recommendations, and perform actions by delegating requests to a set of Internet services. With continued use, it adapts to users' individual language usages, searches and preferences, returning individualized results."/>
          </div>
        </div>
      </div>
      </>
  );
}
