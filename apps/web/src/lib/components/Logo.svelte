<script lang="ts">
	import { appBrandingImage, type AppBrandingProfile } from '@openpost/query-catalog';
	import { appBranding } from '$lib/app-branding.svelte';
	interface Props {
		class?: string;
		width?: number;
		height?: number;
		showText?: boolean;
		decorative?: boolean;
		branding?: AppBrandingProfile;
		dark?: boolean;
	}

	let {
		class: className = '',
		width = 100,
		height = 28,
		showText = false,
		decorative = false,
		branding,
		dark
	}: Props = $props();
	const size = $derived(Math.min(width, height));
	const profile = $derived(branding ?? appBranding.profile);
	const isDark = $derived(dark ?? appBranding.dark);
	let failed = $state<string[]>([]);
	const wordmark = $derived(showText ? appBrandingImage(profile, isDark, true) : undefined);
	const logo = $derived(appBrandingImage(profile, isDark));
	const imageURL = $derived(
		[
			wordmark?.url,
			showText ? profile.wordmark?.url : undefined,
			logo?.url,
			profile.logo?.url
		].find((url) => url && !failed.includes(url))
	);
	const showingWordmark = $derived(
		Boolean(imageURL && showText && [wordmark?.url, profile.wordmark?.url].includes(imageURL))
	);
</script>

<div class="flex max-w-full min-w-0 items-center gap-2 {className}">
	{#if imageURL}
		<img
			src={imageURL}
			alt={decorative || (showText && !showingWordmark) ? '' : profile.display_name}
			aria-hidden={decorative ? 'true' : undefined}
			width={showingWordmark ? 160 : size}
			height={size}
			style:height={`${size}px`}
			style:max-width={showingWordmark ? '160px' : `${size}px`}
			class="min-w-0 shrink-0 object-contain"
			onerror={() => {
				if (imageURL) failed = [...failed, imageURL];
			}}
		/>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			width={size}
			height={size}
			role={decorative || showText ? undefined : 'img'}
			aria-label={decorative || showText ? undefined : profile.display_name}
			aria-hidden={decorative || showText ? 'true' : undefined}
			class="h-auto max-w-full shrink-0"
		>
			<path fill="var(--action-focal)" d="M68 40h120a28 28 0 0 1 28 28v104q-18.5-14-37 0t-37 0t-37 0t-37 0v-104a28 28 0 0 1 28-28z" />
			<path d="M58 214q17.5-13 35 0t35 0t35 0t35 0" fill="none" stroke="#6ea0ff" stroke-width="16" stroke-linecap="round" />
		</svg>
	{/if}
	{#if showText && !showingWordmark}
		<span
			class="truncate font-brand leading-none font-semibold tracking-[-0.02em] text-sidebar-foreground"
			>{profile.display_name}</span
		>
	{/if}
</div>
