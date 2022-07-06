import { WebClient } from "@slack/web-api";

import { TreeDTO } from "./dto/tree-request.interface";
import { Lambda } from "../../common/util/lambda.util";

export default Lambda(async (req, res) => {
  const tree = TreeDTO.from(req);
  const { amount, charity, company } = tree;
  const slackClient = new WebClient(process.env.SLACK_TOKEN);

  await slackClient.chat.postMessage({
    channel: "x-open-tree",
    text: `> Company *${company}* requested to plant *${amount}* trees with *${charity}*.`
  });

  return res.status(200).json({});
});
