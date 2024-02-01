import axios from "axios";
import { server } from "../../utils/helper";

export default function Create() {
  interface blogPost {
    title: string;
    description: string;
    body: string;
    author: string;
    date_posted: string;
  }

  return (
    <div>
      <div className="col-md-12 form-wrapper">
        <h2>Create Post</h2>
        <form id="create-post-form"></form>
        <div className="form-group"></div>
      </div>
    </div>
  );
}
