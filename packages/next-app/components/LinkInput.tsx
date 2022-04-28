import { classNames } from "lib/utils";
// className={classNames(
//     active
//       ? "bg-gray-100 text-gray-900"
//       : "text-gray-700",
//     "flex px-4 py-2 text-sm"
//   )}

export enum LinkNames {
  WEBSITE = "WEBSITE",
  TWITTER = "TWITTER",
  OPENSEA = "OPENSEA"
}

const linksByName: { [linkName in LinkNames]: any } = {
  [LinkNames.WEBSITE]: {
    label: "Website",
    hasPrefix: false
  },
  [LinkNames.TWITTER]: {
    label: "Twitter",
    hasPrefix: true,
    prefixLabel: "twitter.com/"
  },
  [LinkNames.OPENSEA]: {
    label: "OpenSea",
    hasPrefix: true,
    prefixLabel: "opensea.io/"
  }
};

export const DEFAULT_LINKS = [
  LinkNames.WEBSITE,
  LinkNames.TWITTER,
  LinkNames.OPENSEA
];

const LinkInput = ({
  className,
  type
}: {
  className: string;
  type: LinkNames;
}) => {
  console.log("type >", type);
  const { label, hasPrefix, prefixLabel } = linksByName[type];
  return (
    <div className={className}>
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        {hasPrefix && (
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            {prefixLabel}
          </span>
        )}

        <input
          type="text"
          name="username"
          id="username"
          autoComplete="username"
          className={classNames(
            hasPrefix ? "rounded-none" : "rounded-l-md",
            "flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-r-md sm:text-sm border-gray-300"
          )}
        />
      </div>
    </div>
  );
};

export default LinkInput;
