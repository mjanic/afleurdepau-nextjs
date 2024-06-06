"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormState, useFormStatus } from "react-dom";
import { AddProduct, EditProduct } from "../_actions/products";
import { Category, Parfume, Product } from "@prisma/client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react";
import { formatCurrency } from "@/lib/formatters";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

interface ProductFormProps {
    product?: Product | null,
    categories: Category[],
    parfumes: Parfume[]
}

export const ProductForm: React.FC<ProductFormProps> = ({
    product,
    categories,
    parfumes
}) => {
  const [error, action] = useFormState(product == null ? AddProduct : EditProduct.bind(null, product.id), {});

  const [priceInCents, setPriceInCents] = useState<number | undefined>(product?.priceInCents)

  const [imgUrls, setImgUrls] = useState({
    image1: '',
    image2: '',
    image3: '',
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result
        setImgUrls( prev => ({
          ...prev,
          [e.target.name]: imageUrl
        }))
      }
      reader.readAsDataURL(file);
    } 
  } 

    return (
        <form action={action} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              type="name"
              id="name"
              name="name"
              required
              defaultValue={product?.name || ""}
            />
            {error?.name && <div className="text-destructive">{error.name}</div>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="image1">Main Image</Label>
            <Input type="file" id="image1" name="image1" onChange={handleImageChange} required={product == null} />
            {product != null && (
              <Image
                  src={imgUrls.image1 ? imgUrls.image1 : product.img1url.substring(6)}
                  height="100"
                  width="100"
                  alt="Product Image 1"
              />
            )}
            {(product == null && imgUrls.image1) && (
              <Image
                  src={imgUrls.image1}
                  height="100"
                  width="100"
                  alt="Product Image 1"
              />
            )}
            {error?.image1 && <div className="text-destructive">{error.image1}</div>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="image2">Image 2</Label>
            <Input type="file" id="image2" name="image2" onChange={handleImageChange} required={product == null} />
            {product != null && (
              <Image
                  src={imgUrls.image2 ? imgUrls.image2 : product.img2url.substring(6)}
                  height="100"
                  width="100"
                  alt="Product Image 2"
              />
            )}
            {(product == null && imgUrls.image2) && (
              <Image
                  src={imgUrls.image2}
                  height="100"
                  width="100"
                  alt="Product Image 2"
              />
            )}
            {error?.image2 && <div className="text-destructive">{error.image2}</div>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="image3">Image 3</Label>
            <Input type="file" id="image3" name="image3" onChange={handleImageChange} required={product == null} />
            {product != null && (
              <Image
                  src={imgUrls.image3 ? imgUrls.image3 : product.img3url.substring(6)}
                  height="100"
                  width="100"
                  alt="Product Image 3"
              />
            )}
            {(product == null && imgUrls.image3) && (
              <Image
                  src={imgUrls.image3}
                  height="100"
                  width="100"
                  alt="Product Image 3"
              />
            )}
            {error?.image3 && <div className="text-destructive">{error.image3}</div>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="categoryId">Select Category</Label>
            <Select name="categoryId" defaultValue={product?.categoryId} required>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={categories.find(cat => cat.id === product?.categoryId)?.name} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map( category => (
                            <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {error?.categoryId && <div className="text-destructive">{error.categoryId}</div>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="parfumeId">Select Parfume</Label>
            <Select name="parfumeId" defaultValue={product?.parfumeId} required>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={parfumes.find(parfume => parfume.id === product?.parfumeId)?.name} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Parfumes</SelectLabel>
                        {parfumes.map( parfume => (
                            <SelectItem key={parfume.id} value={parfume.id}>{parfume.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {error?.parfumeId && <div className="text-destructive">{error.parfumeId}</div>}
          </div>
          <div className="space-y-2">
                <Label htmlFor="priceInCents">Price In Cents</Label>
                <Input
                    type="number"
                    id="priceInCents"
                    name="priceInCents"
                    required
                    value={priceInCents}
                    onChange={e => setPriceInCents(Number(e.target.value) || undefined)}
                />
                <div className="text-muted-foreground">
                {formatCurrency((priceInCents || 0) / 100)}
                </div>
                {error?.priceInCents && <div className="text-destructive">{error?.priceInCents}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    name="description"
                    required
                    defaultValue={product?.description}
                />
                {error?.description && <div className="text-destructive">{error?.description}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="dimensions">Dimensions</Label>
                <Textarea
                    id="dimensions"
                    name="dimensions"
                    required
                    defaultValue={product?.dimensions}
                />
                {error?.dimensions && <div className="text-destructive">{error?.dimensions}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="weightInGrams">Weight in Grams</Label>
                <Input
                    type="number"
                    id="weightInGrams"
                    name="weightInGrams"
                    required
                    defaultValue={product?.weightInGramms}
                />
                {error?.weightInGrams && <div className="text-destructive">{error?.weightInGrams}</div>}
            </div>
          <SubmitButton />
        </form>
    )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  )
}