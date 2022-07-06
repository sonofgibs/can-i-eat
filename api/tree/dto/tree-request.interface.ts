import { NextApiRequest } from "next";

import { HttpException } from "../../../common/exceptions/http.exception";

export class TreeDTO {
  constructor(
    readonly amount: number,
    readonly charity: string,
    readonly company: string
  ) {}

  static from({ body }: NextApiRequest) {
    if (!body) {
      throw new HttpException(400, "Please provide a body.");
    }

    const { amount, charity, company } = body as Partial<TreeDTO>;

    if (!amount) {
      throw new HttpException(422, "Please provide an `amount`.");
    }

    if (!charity) {
      throw new HttpException(422, "Please provide a `charity`.");
    }

    if (!company) {
      throw new HttpException(422, "Please provide a `company`.");
    }

    return new TreeDTO(amount, charity, company);
  }
}
