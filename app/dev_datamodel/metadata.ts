type StrapiType = StrapiDefaultType | StrapiCustomType
enum StrapiCustomType {
    // No custom types yet
}
enum StrapiDefaultType {
    Component,
    DynamicZone,
// Number formats:
    DecimalNumber,
    BigInteger,
    Integer,
// Text formats:
    ShortText,
    LongText,
// RichText formats:
    RichTextBlocks,
    RichTextMarkdown,
    // Date formats:
    Date,
    DateTime,
    Time,
// Media field types:
    Single_Media,
    Multiple_Media,
// Other:
    Boolean,
    Relation,
    UID,
    Enumeration,
    Email,
    Password,
}

enum StrapiMediaType {
    Image,
    Video,
    Audio,
    File
}

interface StrapiFieldMetadata {
    // Main Field Settings
    strapiType: StrapiType,
    strapiKey: string,
    // Field View Configuration (Representation in CMS)
    strapiLabel?: string, 
    strapiDescription?: string,
    strapiPlaceholder?: string,
    strapiFieldEnabled: boolean, 
    // Advanced Settings
    strapiRelatedField?: string, // Used in UID, REVIEW!
    strapiFieldRequired: boolean,
    strapiFieldLocalizationEnabled?: boolean,
    strapiFieldIsPrivate?: boolean, 
    strapiFieldMaxLength?: number,
    strapiFieldMinLength?: number,
    strapiFieldRegExp?: string,
    strapiFieldIsUnique?: boolean,
    strapiMediaAllowed?: StrapiMediaType[],
}

type StrapiFieldsMetadata = {
    [key: string]: StrapiFieldMetadata
}

export const Fields: StrapiFieldsMetadata = {
    CMSName: {
        // name: "CMS_Field",
        strapiType: StrapiDefaultType.ShortText,
        strapiKey: "CMS_Name",
        strapiDescription: `Удобное название для отображения в CMS. Например, в списках. Можно писать "как есть", на сайте оно отображаться не будет`,
        strapiPlaceholder: "",
        strapiFieldEnabled: true,
        strapiFieldRequired: true,
    },
}

export const StrapiComponents = {

}

export const StrapiModels = {
    Category: {
        API_Name: "category",
        API_Name_Plural: "caterogies",
    },

    Page: {
        API_Name: "page",
        API_Name_Plural: "pages",
        IsSingleType: false,
    },

    PageSection: {
        API_Name: "page-section",
        API_Name_Plural: "page-sections",
        IsSingleType: false,
    },

    PageTemplate: {
        API_Name: "page-template",
        API_Name_Plural: "page-templates",
        IsSingleType: false,
    },
    
    PortfolioWork: {
        API_Name: "portfolio-work",
        API_Name_Plural: "portfolio-works",
        IsSingleType: false,
    },
 
    ProductAnalog: {
        API_Name: "product-analog",
        API_Name_Plural: "product-analogs",
        IsSingleType: false,
    },
 
    ProductLine: {
        API_Name: "product-line",
        API_Name_Plural: "product-lines",
        IsSingleType: false,
    },
}