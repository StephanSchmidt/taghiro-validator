import { Tag } from "taghiro";
export declare type Email = Tag<"email">;
export declare function isEmail(value: string): value is string & Email;
export declare type CreditCard = Tag<"credit-card">;
export declare function isCreditCard(value: string): value is string & CreditCard;
export declare type Currency = Tag<"currency">;
export declare function isCurrrency(value: string): value is string & Currency;
export declare type DataUri = Tag<"data-uri">;
export declare function isDataUri(value: string): value is string & DataUri;
export declare type FQDN = Tag<"fqdn">;
export declare function isFQDN(value: string): value is string & FQDN;
declare type HashType = "md4" | "md5" | "sha1" | "sha256" | "sha384" | "sha512" | "ripemd128" | "ripemd160" | "tiger128" | "tiger160" | "tiger192" | "crc32" | "crc32b";
export declare class Hash<T extends HashType> {
    private __hash;
}
export declare function isHash<T extends HashType>(value: string, hash: T): value is string & Hash<T>;
export declare type HexColor = Tag<"hexcolor">;
export declare function isHexColor(value: string): value is string & HexColor;
export declare type Ip = Tag<"ip">;
export declare function isIp(value: string): value is string & Ip;
export declare type Isbn = Tag<"isbn">;
export declare function isIsbn(value: string): value is string & Isbn;
export declare type Issn = Tag<"issn">;
export declare function isIssn(value: string): value is string & Issn;
export declare type Isin = Tag<"isin">;
export declare function isIsin(value: string): value is string & Isin;
export declare type MimeType = Tag<"mime-type">;
export declare function isMimeType(value: string): value is string & MimeType;
export {};
