import Link from "next/link"

export default function BtnPrimary({BtnPrimaryText, BtnPrimaryLink}) {
  return (
    <Link className="max-w-max px-10 py-5 text-3xl font-semibold text-BabyPowder bg-EerieBlack dark:bg-BabyPowder dark:text-NightDark" href={BtnPrimaryLink}>
        {BtnPrimaryText}
    </Link>
  )
}
